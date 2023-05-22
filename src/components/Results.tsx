import React from "react";
import Card from "./Card";
import { resultInterface } from "@/interfaces/resultInterface";

export default function Results({
  results,
}: {
  results: Array<resultInterface>;
}) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result: resultInterface) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
