<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/WEB-INF/views/board/include/include-header.jspf" %>
<style> 
	.btn-container{
		margin-bottom: 20px; 
	}

	#frm {
		padding :2em;
	}
</style>
</head>
<body>
 	<c:import url="../top.jsp"></c:import>
    <form id="frm">
        <table class="board_view">
            <colgroup>
                <col width="15%"/>
                <col width="35%"/>
                <col width="15%"/>
                <col width="35%"/>
            </colgroup>
            <tbody>
                <tr>
                    <th scope="row">글 번호</th>
                    <td>
                        ${map.NUM }
                        <input type="hidden" id="NUM" name="NUM" value="${map.NUM }">
                    </td>
<%--                     <th scope="row">조회수</th>
                    <td>${map.HIT_CNT }</td> --%>
                </tr>
                <tr>
<%--                     <th scope="row">작성자</th>
                    <td>${map.CREA_ID }</td> --%>
                    <th scope="row">작성시간</th>
                    <td>${map.CREA_DATE }</td>
                </tr>
                <tr>
                    <th scope="row">제목</th>
                    <td colspan="3">
                        <input type="text" id="TITLE" name="TITLE" class="wdp_90" value="${map.TITLE }"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" class="view_text">
                        <textarea rows="20" cols="100" title="내용" id="CONTENT" name="CONTENT">${map.CONTENT }</textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    <div align="center" class="btn-container">
	    <a href="#this" class="btn" id="list">목록으로</a>
	    <a href="#this" class="btn" id="update">저장하기</a>
	    <a href="#this" class="btn" id="delete">삭제하기</a>
    </div>
    <c:import url="../bottom.jsp"></c:import>

     
    <%@ include file="/WEB-INF/views/board/include/include-body.jspf" %>
    <script type="text/javascript">
        $(document).ready(function(){
            $("#list").on("click", function(e){ //목록으로 버튼
                e.preventDefault();
                fn_openBoardList();
            });
             
            $("#update").on("click", function(e){ //저장하기 버튼
                e.preventDefault();
                fn_updateBoard();
            });
             
            $("#delete").on("click", function(e){ //삭제하기 버튼
                e.preventDefault();
                fn_deleteBoard();
            });
        });
         
        function fn_openBoardList(){
            var comSubmit = new ComSubmit();
            comSubmit.setUrl("<c:url value='/board/openBoardList.do' />");
            comSubmit.submit();
        }
         
        function fn_updateBoard(){
            var comSubmit = new ComSubmit("frm");
            comSubmit.setUrl("<c:url value='/board/updateBoard.do' />");
            comSubmit.submit();
        }
         
        function fn_deleteBoard(){
            var comSubmit = new ComSubmit();
            comSubmit.setUrl("<c:url value='/board/deleteBoard.do' />");
            comSubmit.addParam("NUM", $("#NUM").val());
            comSubmit.submit();
             
        }
    </script>
</body>
</html>