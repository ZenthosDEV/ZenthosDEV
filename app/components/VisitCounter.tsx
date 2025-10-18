'use client'

import { Code } from '@heroui/react';
import { useEffect, useState } from "react";

const API_URL = "https://counter.apex-cloud.workers.dev";

const VisitCounter = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const incrementView = async () => {
      await fetch(`${API_URL}/inc`, { method: "POST" });
      const res = await fetch(`${API_URL}/get`, { method: "GET" });
      const data = await res.json();
      setViews(data.views);
    };

    incrementView();
  }, []);

  return <Code color="danger" size="lg">Visitors : {views !== null ? views : "Loading..."}</Code>;
};

export default VisitCounter;
