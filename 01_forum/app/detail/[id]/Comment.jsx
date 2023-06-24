"use client";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import React, { useState, useEffect } from "react";

export default function Comment({ postId }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch(`/api/comments/list?postId=${postId}`)
      .then((response) => response.json())
      .then((result) => {
        setCommentList(result);
      });
  }, []);

  const handleClickComment = () => {
    if (comment === "") {
      alert("댓글을 작성해주세요");
      return;
    } else {
      fetch(`/api/comments/new?postId=${postId}`, {
        method: "POST",
        body: comment,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("댓글 작성 실패");
          }
          return response.json();
        })
        .then((result) => {
          alert("댓글작성 성공");
          setComment("");
          setCommentList([result, ...commentList]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
        <button onClick={handleClickComment}>입력</button>
      </div>
      <div className="comment-view">
        {commentList.lengh < 0 ? (
          <p>로딩중</p>
        ) : (
          commentList.map((list, idx) => {
            return (
              <div className="comment-list" key={idx}>
                <div>
                  <p>{list.user}</p>
                  <p>{list.comment}</p>
                </div>
                <button>삭제</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
