"use client";

import { FiThumbsUp, FiThumbsDown, FiStar } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { sendFeedback } from "@/app/lib/api";

interface Props {
  jobId: string;
}

export default function FeedbackButtons({ jobId }: Props) {
  const { getToken } = useAuth();
  const [busy, setBusy] = useState(false);

  const [thumb, setThumb] = useState<"like" | "dislike" | null>(null);
  const [starred, setStarred] = useState(false);

  const push = async (type: "like" | "dislike" | "star") => {
    if (busy) return;
    try {
      setBusy(true);
      const token = await getToken();
      await sendFeedback(jobId, type, token || undefined);

      // update UI state
      if (type === "star") setStarred(true);
      else setThumb(type);
    } catch (err) {
      console.error("Feedback error:", err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => push("like")}
        disabled={busy}
        className={`text-black hover:text-gray-600 disabled:opacity-50 ${
          thumb === "like" ? "text-green-600" : ""
        }`}
      >
        <FiThumbsUp size={16} />
      </button>

      <button
        onClick={() => push("dislike")}
        disabled={busy}
        className={`text-black hover:text-gray-600 disabled:opacity-50 ${
          thumb === "dislike" ? "text-red-600" : ""
        }`}
      >
        <FiThumbsDown size={16} />
      </button>

      {/* independent of thumbs */}
      <button
        onClick={() => push("star")}
        disabled={busy || starred}
        className={`text-black hover:text-gray-600 disabled:opacity-50 ${
          starred ? "text-yellow-500" : ""
        }`}
      >
        <FiStar size={16} />
      </button>
    </div>
  );
}
