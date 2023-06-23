export default async function handler(req, res) {
  const githubRes = await fetch(
    `http://api.github.com/users/${req.query.username}`
  );
  const user = await githubRes.json();
  return res.status(200).json(user); // 데이터를 클라이언트로 전송
}
