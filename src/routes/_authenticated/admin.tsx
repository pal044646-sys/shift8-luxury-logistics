import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  listBookings, createBooking, updateBooking, deleteBooking,
  listEnquiries, updateEnquiryStatus, listFeedback,
  bootstrapFirstAdmin, checkIsAdmin,
} from "@/lib/admin.functions";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Plus, Trash2, RefreshCw, Package, Mail, Star, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard — SHIFT8" }, { name: "robots", content: "noindex" }] }),
  component: AdminPage,
});

const STATUS_OPTIONS = ["pending", "picked_up", "packed", "in_transit", "out_for_delivery", "delivered", "cancelled"];

function AdminPage() {
  const navigate = useNavigate();
  const check = useServerFn(checkIsAdmin);
  const bootstrap = useServerFn(bootstrapFirstAdmin);
  const fetchBookings = useServerFn(listBookings);
  const fetchEnquiries = useServerFn(listEnquiries);
  const fetchFeedback = useServerFn(listFeedback);
  const create = useServerFn(createBooking);
  const update = useServerFn(updateBooking);
  const del = useServerFn(deleteBooking);
  const updEnq = useServerFn(updateEnquiryStatus);

  const [tab, setTab] = useState<"bookings" | "enquiries" | "feedback">("bookings");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<any[]>([]);
  const [showNew, setShowNew] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function refresh() {
    setRefreshing(true); setErr(null);
    try {
      const [b, e, f] = await Promise.all([fetchBookings(), fetchEnquiries(), fetchFeedback()]);
      setBookings(b.bookings); setEnquiries(e.enquiries); setFeedback(f.feedback);
    } catch (e: any) { setErr(e?.message || "Load failed"); }
    finally { setRefreshing(false); }
  }

  useEffect(() => {
    check().then((r) => {
      setIsAdmin(r.isAdmin);
      if (r.isAdmin) refresh();
    }).catch(() => setIsAdmin(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  async function claimAdmin() {
    setErr(null);
    try {
      await bootstrap();
      setIsAdmin(true);
      await refresh();
    } catch (e: any) { setErr(e?.message || "Bootstrap failed"); }
  }

  if (isAdmin === null) {
    return <div className="min-h-screen flex items-center justify-center text-foreground/60">Loading...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card rounded-2xl p-8 max-w-md text-center gold-border">
          <ShieldCheck className="mx-auto text-gold mb-3" size={48} />
          <h2 className="font-display text-2xl mb-2 text-gold-gradient">Claim Admin Access</h2>
          <p className="text-foreground/70 mb-4 text-sm">
            First-time setup: click the button below to become the admin for this account. This only works if no admin has been set yet.
          </p>
          {err && <p className="text-destructive-foreground text-sm mb-3">{err}</p>}
          <button onClick={claimAdmin} className="w-full rounded-xl px-4 py-3 font-bold text-navy-deep"
                  style={{ background: "var(--gradient-gold)" }}>Become Admin</button>
          <button onClick={signOut} className="mt-3 text-sm text-foreground/60">Sign Out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-gold/20 px-4 sm:px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-2xl text-gold-gradient">SHIFT8 Admin</h1>
        <div className="flex items-center gap-2">
          <button onClick={refresh} disabled={refreshing} className="glass-card rounded-lg px-3 py-2 text-sm text-gold hover:bg-gold/10 flex items-center gap-1.5">
            <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} /> Refresh
          </button>
          <button onClick={signOut} className="glass-card rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-destructive/20 flex items-center gap-1.5">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </header>

      <div className="px-4 sm:px-6 py-6 max-w-7xl mx-auto">
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <TabBtn active={tab === "bookings"} onClick={() => setTab("bookings")} icon={<Package size={16} />}>
            Bookings ({bookings.length})
          </TabBtn>
          <TabBtn active={tab === "enquiries"} onClick={() => setTab("enquiries")} icon={<Mail size={16} />}>
            Enquiries ({enquiries.filter(e => e.status === "new").length}/{enquiries.length})
          </TabBtn>
          <TabBtn active={tab === "feedback"} onClick={() => setTab("feedback")} icon={<Star size={16} />}>
            Feedback ({feedback.length})
          </TabBtn>
        </div>

        {err && <div className="mb-4 glass-card rounded-xl p-3 text-destructive-foreground text-sm">{err}</div>}

        {tab === "bookings" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-display text-xl">All Bookings</h2>
              <button onClick={() => setShowNew(!showNew)} className="rounded-lg px-3 py-2 text-sm font-semibold text-navy-deep flex items-center gap-1.5"
                      style={{ background: "var(--gradient-gold)" }}>
                <Plus size={16} /> New Booking
              </button>
            </div>

            {showNew && <NewBookingForm onCreate={async (d) => { await create({ data: d }); setShowNew(false); refresh(); }} onCancel={() => setShowNew(false)} />}

            <div className="space-y-3">
              {bookings.map((b) => (
                <BookingRow key={b.id} booking={b} onUpdate={async (patch) => { await update({ data: { id: b.id, ...patch } }); refresh(); }}
                            onDelete={async () => { if (confirm("Delete this booking?")) { await del({ data: { id: b.id } }); refresh(); } }} />
              ))}
              {bookings.length === 0 && <p className="text-center text-foreground/50 py-10">No bookings yet.</p>}
            </div>
          </>
        )}

        {tab === "enquiries" && (
          <div className="space-y-3">
            {enquiries.map((e) => (
              <div key={e.id} className="glass-card rounded-xl p-4">
                <div className="flex justify-between items-start gap-3 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{e.name} <span className="text-gold text-sm">· {e.phone}</span></p>
                    {e.email && <p className="text-xs text-foreground/60">{e.email}</p>}
                    <p className="text-sm text-foreground/80 mt-1">
                      {e.service_type && <span className="text-gold">{e.service_type}</span>}
                      {e.from_location && <> · {e.from_location}</>}
                      {e.to_location && <> → {e.to_location}</>}
                      {e.move_date && <> · {e.move_date}</>}
                    </p>
                    {e.message && <p className="text-sm text-foreground/70 mt-2 italic">"{e.message}"</p>}
                    <p className="text-xs text-foreground/40 mt-1">{new Date(e.created_at).toLocaleString()}</p>
                  </div>
                  <select value={e.status} onChange={async (ev) => { await updEnq({ data: { id: e.id, status: ev.target.value } }); refresh(); }}
                          className="bg-navy border border-gold/30 rounded-lg px-2 py-1 text-xs text-foreground">
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="quoted">Quoted</option>
                    <option value="converted">Converted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            ))}
            {enquiries.length === 0 && <p className="text-center text-foreground/50 py-10">No enquiries yet.</p>}
          </div>
        )}

        {tab === "feedback" && (
          <div className="space-y-3">
            {feedback.map((f) => (
              <div key={f.id} className="glass-card rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(n => <Star key={n} size={14} className={n <= f.rating ? "fill-gold text-gold" : "text-foreground/20"} />)}
                    </div>
                    <p className="font-semibold text-foreground mt-1">{f.customer_name || "Anonymous"}</p>
                    {f.tracking_code && <p className="text-xs text-gold">{f.tracking_code}</p>}
                    {f.comment && <p className="text-sm text-foreground/70 mt-2">"{f.comment}"</p>}
                  </div>
                  <p className="text-xs text-foreground/40">{new Date(f.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
            {feedback.length === 0 && <p className="text-center text-foreground/50 py-10">No feedback yet.</p>}
          </div>
        )}
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, icon, children }: any) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm whitespace-nowrap ${
      active ? "bg-gold text-navy-deep font-semibold" : "glass-card text-foreground/70 hover:text-gold"
    }`}>{icon}{children}</button>
  );
}

function BookingRow({ booking, onUpdate, onDelete }: any) {
  const [expanded, setExpanded] = useState(false);
  const [loc, setLoc] = useState(booking.current_location_text || "");
  return (
    <div className="glass-card rounded-xl p-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display text-gold-gradient font-bold">{booking.tracking_code}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-gold/15 text-gold uppercase tracking-wider">{booking.status.replaceAll("_", " ")}</span>
          </div>
          <p className="text-sm text-foreground/80 mt-1">
            {booking.customer_name} · {booking.customer_phone} · {booking.service_type}
          </p>
          <p className="text-xs text-foreground/60">{booking.from_city} → {booking.to_city}</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={booking.status} onChange={(e) => onUpdate({ status: e.target.value as any })}
                  className="bg-navy border border-gold/30 rounded-lg px-2 py-1 text-xs text-foreground">
            {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.replaceAll("_", " ")}</option>)}
          </select>
          <button onClick={() => setExpanded(!expanded)} className="text-xs text-gold hover:underline">
            {expanded ? "Close" : "Edit"}
          </button>
          <button onClick={onDelete} className="text-destructive-foreground p-1"><Trash2 size={14} /></button>
        </div>
      </div>
      {expanded && (
        <div className="mt-3 pt-3 border-t border-gold/15 space-y-2">
          <div className="flex gap-2">
            <input value={loc} onChange={(e) => setLoc(e.target.value)} placeholder="Current location (e.g. Delhi Highway, Meerut)"
                   className="flex-1 bg-transparent border border-gold/30 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-gold" />
            <button onClick={() => onUpdate({ current_location_text: loc })} className="rounded-lg px-3 py-2 text-xs font-semibold text-navy-deep"
                    style={{ background: "var(--gradient-gold)" }}>Update Location</button>
          </div>
        </div>
      )}
    </div>
  );
}

function NewBookingForm({ onCreate, onCancel }: any) {
  const [form, setForm] = useState({
    tracking_code: "SH8-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    customer_name: "", customer_phone: "", customer_email: "",
    from_city: "", to_city: "", service_type: "House Shifting",
    status: "pending" as const, estimated_delivery: "", notes: "",
    current_location_text: "", current_location_lat: null, current_location_lng: null,
  });
  return (
    <form onSubmit={async (e) => { e.preventDefault(); await onCreate(form); }} className="glass-card rounded-xl p-4 mb-4 space-y-3 gold-border">
      <div className="grid sm:grid-cols-2 gap-3">
        <Inp label="Tracking Code" v={form.tracking_code} on={(v) => setForm({ ...form, tracking_code: v.toUpperCase() })} />
        <Inp label="Service Type" v={form.service_type} on={(v) => setForm({ ...form, service_type: v })} />
        <Inp label="Customer Name" v={form.customer_name} on={(v) => setForm({ ...form, customer_name: v })} req />
        <Inp label="Phone" v={form.customer_phone} on={(v) => setForm({ ...form, customer_phone: v })} req />
        <Inp label="Email" v={form.customer_email} on={(v) => setForm({ ...form, customer_email: v })} />
        <Inp label="Est. Delivery (YYYY-MM-DD)" v={form.estimated_delivery} on={(v) => setForm({ ...form, estimated_delivery: v })} />
        <Inp label="From City" v={form.from_city} on={(v) => setForm({ ...form, from_city: v })} req />
        <Inp label="To City" v={form.to_city} on={(v) => setForm({ ...form, to_city: v })} req />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold text-navy-deep" style={{ background: "var(--gradient-gold)" }}>Create</button>
        <button type="button" onClick={onCancel} className="rounded-lg px-4 py-2 text-sm text-foreground/70">Cancel</button>
      </div>
    </form>
  );
}

function Inp({ label, v, on, req }: any) {
  return (
    <div>
      <label className="text-xs text-foreground/60 block mb-1">{label}</label>
      <input value={v} onChange={(e) => on(e.target.value)} required={req}
             className="w-full bg-transparent border border-gold/30 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-gold" />
    </div>
  );
}
