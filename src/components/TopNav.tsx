"use client";

import { Menu, Bell, Search, LogOut, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import NotificationDropdown from "./NotificationDropdown";
import Toast from "@/components/Toast";


export default function TopNav({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const bellRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load notifications (READ)
  useEffect(() => {
    const saved = localStorage.getItem("notifications");
    if (saved) {
      setNotifications(JSON.parse(saved));
    } else {
      const initial = [
        { id: 1, text: "Spike in negative sentiment", read: false },
        { id: 2, text: "AI recommendation pending", read: false },
        { id: 3, text: "Draft approved", read: true },
      ];
      localStorage.setItem("notifications", JSON.stringify(initial));
      setNotifications(initial);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (bellRef.current && !bellRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
    localStorage.setItem("notifications", JSON.stringify(updated));
  };

  const logout = () => {
  localStorage.clear();
  setToast("Logged out successfully");

  setTimeout(() => {
    router.push("/login");
  }, 800);
};


  return (
    <>
    <header className="relative z-40 h-16 bg-white/85 backdrop-blur-xl border-b border-black/[0.06] px-6 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold text-[#1A202C]">
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 h-9 rounded-xl bg-[#F1F5F9]">
          <Search size={16} className="text-[#64748B]" />
          <input
            placeholder="Search insights…"
            className="bg-transparent outline-none text-sm w-40"
          />
        </div>

        {/* Notifications */}
        <div ref={bellRef} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="relative p-2 rounded-lg hover:bg-black/5 transition"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>

          {open && (
            <NotificationDropdown
              notifications={notifications}
              onClose={() => setOpen(false)}
              onMarkAllRead={markAllRead}
              onItemClick={() => setOpen(false)}
            />
          )}
        </div>

        {/* Profile */}
        <button className="p-2 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#14B8A6] text-white">
          <User size={18} />
        </button>

        {/* Logout */}
        <button
          onClick={logout}
          title="Logout"
          className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
    {toast && (
  <Toast
    message={toast}
    type="info"
    onClose={() => setToast(null)}
  />
)}
    </>
  );
}
