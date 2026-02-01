"use client";

import {
  LayoutDashboard,
  MessageSquare,
  Brain,
  FileEdit,
  BarChart3,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "conversations", label: "Conversations", icon: MessageSquare },
  { id: "recommendations", label: "AI Recommendations", icon: Brain },
  { id: "drafts", label: "Drafts & PR Mode", icon: FileEdit },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState("overview");

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 h-screen w-64
          bg-white/80 backdrop-blur-xl
          border-r border-black/[0.06]
          z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-black/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#14B8A6] flex items-center justify-center text-white font-semibold">
              AI
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A202C]">Human-First AI</p>
              <p className="text-xs text-[#64748B]">Brand Intelligence</p>
            </div>
          </div>

          <button className="lg:hidden" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const activeItem = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 rounded-xl
                  text-sm font-medium transition-all
                  ${
                    activeItem
                      ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                      : "text-[#475569] hover:bg-black/[0.04]"
                  }
                `}
              >
                <Icon
                  size={18}
                  className={activeItem ? "text-[#3B82F6]" : "text-[#94A3B8]"}
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
