import { Review } from "@prisma/client"

export const calculateReviewRating = (reviews: Review[]) => {
  // review의 rating의 점수를 더한 후, 평균을 구해 화면에 나타낸다.
  if (!reviews.length) return 0;
  
  return reviews.reduce((sum, review)=>{
    return sum + review.rating
  }, 0) / reviews.length
}
