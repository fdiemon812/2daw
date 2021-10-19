<%@ page language="java" contentType="text/html; charset=UTF-8" 
    pageEncoding="UTF-8"%>

<!DOCTYPE html>

<!-- Uso de excalamacion para definir metodos y variables -->
<%!

int contador=0;

void sumaContador() {
	contador++;
	
}
%>
<!-- ejecutamos la función -->
<% sumaContador() ;%>


<html>
<body>
<h1> Bienvenido a mi proyecto JSP</h1>
<h2>Eres la visita número: </h2>
<%=contador %>


<a href="probando.jsp"><input type="button" value="Ir"></a>



</body>


</html>




