export default function handler(req, res) {
  if(res.method == 'POST'){
    console.log(123);
    return res.status(200).json("처리 완료");
  }

}
