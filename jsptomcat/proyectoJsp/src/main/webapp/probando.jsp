<%@ page language="java" contentType="text/html; charset=UTF-8" 
    pageEncoding="UTF-8" import="proyectoJsp.Persona"%>
    
    
<!DOCTYPE html>


<body>

<%-- 
<%
Persona persona1 = new Persona();
persona1.setNombre("Flavio");
persona1.setDni("778181818");
persona1.setEdad(25);
%>


<%= persona1 %>
 --%>




<jsp:useBean id="persona" class="proyectoJsp.Persona"></jsp:useBean>
<jsp:setProperty property="nombre" name="persona"/>


<h1>Datos persona: </h1>
<jsp:getProperty property="nombre" name="persona"/>



</body>