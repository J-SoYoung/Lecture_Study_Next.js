"use client";
import React, { useState, useEffect } from "react";

export default function Comment({ postId, user }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [commentEdit, setCommentEdit] = useState("");

  const loginUser = user?.user.email;

  useEffect(() => {
    fetch(`/api/comments/list?postId=${postId}`)
      .then((response) => response.json())
      .then((result) => {
        setCommentList(result);
      });
  }, []);

  const handleCommentCreate = () => {
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

  const handleCommentDelete = (id) => {
    fetch(`/api/comments/delete?id=${id}`, {
      method: "POST",
      body: postId,
    })
      .then((response) => response.json())
      .then((result) => {
        alert("댓글이 삭제되었습니다");
        setCommentList([...result]);
      });
  };

  const handleCommentEdit = (id) => {
    fetch(`/api/comments/edit?id=${id}&postId=${postId}`, {
      method: "POST",
      body: commentEdit,
    })
      .then((res) => res.json())
      .then((result) => {
        alert("댓글이 수정되었습니다");
        setEditIndex(-1);
        setCommentList([...result])
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
        {commentList?.lengh < 0 ? (
          <p>로딩중</p>
        ) : (
          commentList?.map((list, idx) => {
            return (
              <div className="comment-list" key={idx}>
                <div>
                  <p>{list.user}</p>
                  {editIndex === idx ? (
                    <input
                      type="text"
                      defaultValue={list.comment}
                      onChange={(e) => setCommentEdit(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "8px",
                        boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    <p>{list.comment}</p>
                  )}
                </div>
                {loginUser === list.user && editIndex === idx ? (
                  <div>
                    <button
                      onClick={() => {
                        handleCommentEdit(list._id);
                      }}
                    >
                      수정완료
                    </button>
                    <button
                      onClick={() => {
                        setEditIndex(-1);
                      }}
                    >
                      수정취소
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => {
                        handleCommentDelete(list._id);
                      }}
                    >
                      삭제
                    </button>
                    <button
                      onClick={() => {
                        setEditIndex(idx);
                      }}
                    >
                      수정
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
