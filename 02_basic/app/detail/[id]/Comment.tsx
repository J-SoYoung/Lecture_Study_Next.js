"use client";
import React, { useState, useEffect } from "react";

interface CommentType {
  comment: string;
  postId: string;
  user: string;
  _id: string;
}

export default function Comment({ postId }: any) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<Array<CommentType>>([]);

  useEffect(() => {
    fetch(`/api/comments/list?postId=${postId}`)
      .then((res) => res.json())
      .then((result) => {
        setCommentList(result);
      });
  }, []);

  const handleCommentCreate = () => {
    if (comment === "") {
      alert("댓글을 작성해주세요");
      return;
    }
    fetch(`/api/comments/new?postId=${postId}`, {
      method: "POST",
      body: comment,
    })
      .then((res) => res.json())
      .then((result) => {
        alert("댓글작성 성공");
        setComment("");
        setCommentList([result, ...commentList]);
      });
  };

  const handleCommentDelete = (id:string) => {
    fetch(`/api/comments/delete?id=${id}`, {
      method: "POST",
      body: postId,
    })
      .then((response) => response.json())
      .then((result) => {
        alert("댓글이 삭제되었습니다");
        setCommentList(result);
      });
  };

  return (
    <div className="comment-box">
      <h2>댓글작성</h2>
      <div className="comment-input">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력해주세요"
        />
        <button onClick={handleCommentCreate}>입력</button>
      </div>
      <div className="comment-view">
        {commentList?.length < 0 ? (
          <p>로딩중</p>
        ) : (
          commentList?.map((list: CommentType, idx: number) => {
            return (
              <div className="comment-list" key={idx}>
                <div>
                  <p>유저는 아직</p>
                  <p>{list?.comment}</p>
                </div>
                <div className="comment-btn-box">
                  <button>수정</button>
                  <button
                    onClick={() => {
                      handleCommentDelete(list?._id);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
