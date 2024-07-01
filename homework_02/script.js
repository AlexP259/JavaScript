document.write("<table border='1' width='260'>");
for(let i = 0; i <= 10; i++){
    document.write("<tr>");
    for(let j = 0; j <= 10; j++){
        if (i == 0){
            document.write("<td>" + j + "</td>");
            continue;
        }
        if(j == 0){
            document.write("<td>" + i + "</td>");
        } else {
            if((i + j) % 2 == 0){
                document.write("<td bgcolor='red'>" + i * j + "</td>");
            } else {
                document.write("<td bgcolor='yellow'>" + i * j + "</td>");
            }
        }
    }
    document.write("</tr>");
}
document.write("</table>");