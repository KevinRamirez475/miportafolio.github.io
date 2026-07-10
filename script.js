document.addEventListener("DOMContentLoaded", () => {
    const printBtn = document.getElementById("printBtn");

    if (printBtn) {
        printBtn.addEventListener("click", () => {
            // Llama a la ventana de impresión del navegador
            // Los estilos "@media print" en CSS se encargarán de formatearlo correctamente.
            window.print();
        });
    }
    
    // Aquí puedes agregar futuras funcionalidades, como un botón de 
    // modo oscuro (dark mode) o animaciones de entrada.
});