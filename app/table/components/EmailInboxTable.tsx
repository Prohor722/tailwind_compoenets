"use client";
import { useState } from "react";

const EmailInboxTable = () => {
  const [favoriteEmails, setFavoriteEmails] = useState(new Set());
  
  const emailData = [
    { id: 1, from: 'client@company.com', subject: 'Q4 Budget Proposal', preview: 'Please review the attached proposal...', received: '2h ago', unread: true, starred: false, label: 'work' },
    { id: 2, from: 'team@startup.io', subject: 'Weekly Standup', preview: 'Thanks everyone for the updates on...', received: '4h ago', unread: true, starred: true, label: 'work' },
    { id: 3, from: 'hr@company.com', subject: 'Benefits Enrollment', preview: 'Your benefits enrollment period starts...', received: '1d ago', unread: false, starred: false, label: 'personal' },
    { id: 4, from: 'support@vendor.com', subject: 'Order Confirmation #12345', preview: 'Your order has been confirmed...', received: '2d ago', unread: false, starred: false, label: 'shopping' },
    { id: 5, from: 'manager@company.com', subject: 'Performance Review Scheduled', preview: 'Your annual review is scheduled for...', received: '3d ago', unread: false, starred: true, label: 'work' },
  ];
    

  const toggleStarred = (id: number) => {
    const newSet = new Set(favoriteEmails);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setFavoriteEmails(newSet);
  };

  return (
    <div className="divide-y divide-slate-200">
      {emailData.map((email) => (
        <div
          key={email.id}
          className={`px-6 py-4 hover:bg-slate-50 transition-colors flex items-center gap-4 group cursor-pointer ${
            email.unread ? "bg-blue-50" : ""
          }`}
        >
          <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
          <button
            onClick={() => toggleStarred(email.id)}
            className={`flex-shrink-0 ${
              favoriteEmails.has(email.id)
                ? "text-yellow-400"
                : "text-slate-300 group-hover:text-slate-400"
            }`}
          >
            <Star
              className={`w-5 h-5 ${
                favoriteEmails.has(email.id) ? "fill-yellow-400" : ""
              }`}
            />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p
                className={`font-semibold ${
                  email.unread ? "text-slate-900" : "text-slate-600"
                }`}
              >
                {email.from}
              </p>
              {email.unread && (
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              )}
            </div>
            <p
              className={`text-sm ${
                email.unread ? "font-semibold text-slate-900" : "text-slate-600"
              }`}
            >
              {email.subject}
            </p>
            <p className="text-xs text-slate-500">{email.preview}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="inline-flex px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium capitalize">
              {email.label}
            </span>
            <span className="text-xs text-slate-500">{email.received}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailInboxTable;
