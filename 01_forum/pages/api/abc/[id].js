export default function handler(req, res) {
  console.log(req.query, "id출력");
  return res.status(200).json("");
}
