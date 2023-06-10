export default function handler(req, res) {
  const date = new Date();

  if (res.method == "GET") {
    return res.status(200).json(date.toISOString().slice(0, 10));
  }
}
