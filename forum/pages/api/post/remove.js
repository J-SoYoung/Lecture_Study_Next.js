import React from "react";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    console.log(req.body);
  }
}
