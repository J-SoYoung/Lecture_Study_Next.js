export default function handler(res, req) {
  if(res.method == 'POST'){
    console.log(123);
    return req.status(200).json("처리 완료");
  }

}
