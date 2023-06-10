export default function handler(res, req) {
  const date = new Date();

  if (res.method == "GET") {
    return req.status(200).json(date.toISOString().slice(0,10));
  }
}
