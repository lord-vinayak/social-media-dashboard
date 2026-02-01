"use client";

import { X } from "lucide-react";

export default function NotificationDropdown({
  notifications,
  onClose,
  onMarkAllRead,
  onItemClick,
}: any) {
  return (
    <div className="absolute right-0 mt-3 w-80 rounded-2xl bg-white shadow-2xl border border-black/5 z-50 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-sm font-semibold text-slate-900">
          Notifications
        </span>
        <button
          onClick={onClose}
          className="p-1 rounded-md hover:bg-black/5 transition"
        >
          <X size={16} className="text-slate-500" />
        </button>
      </div>

      {/* Notifications */}
      <div className="max-h-64 overflow-y-auto px-2">
        {notifications.length === 0 ? (
          <div className="px-3 py-6 text-center text-sm text-slate-500">
            You’re all caught up ✨
          </div>
        ) : (
          notifications.map((n: any) => (
            <div
              key={n.id}
              onClick={onItemClick}
              className={`
                mx-1 my-1 px-4 py-3 rounded-xl cursor-pointer transition
                ${
                  n.read
                    ? "text-slate-500 hover:bg-slate-50"
                    : "bg-blue-50/60 text-slate-900 hover:bg-blue-100/60"
                }
              `}
            >
              <p className="text-sm leading-snug">
                {n.text}
              </p>
              {!n.read && (
                <span className="mt-1 inline-block text-[11px] text-blue-600 font-medium">
                  New
                </span>
              )}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="px-4 py-3">
          <button
            onClick={onMarkAllRead}
            className="w-full text-sm font-medium text-blue-600 hover:text-blue-700 transition"
          >
            Mark all as read
          </button>
        </div>
      )}
    </div>
  );
}
