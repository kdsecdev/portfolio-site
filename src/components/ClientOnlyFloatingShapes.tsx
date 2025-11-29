"use client";
import { useEffect, useState } from "react";
import { FloatingShapes } from "./FloatingShapes";

export const ClientOnlyFloatingShapes = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Render nothing on the server
  }

  return <FloatingShapes />;
};