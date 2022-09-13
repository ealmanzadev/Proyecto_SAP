
$(document).ready(function() {    
    $('#example').DataTable({
    //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
               "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
               "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
			     },
			     "sProcessing":"Procesando...",
            }
    });     
});

const cities = {
    ama: ["El Encanto", "La Chorrera", "La Pedrera", "La Victoria", 
    "Leticia", "Miriti", "Puerto Alegria", "Puerto Arica", "Puerto Nariño", 
    "Puerto Ssantander", "Taparaca"],
    ant: ["M", "A", "E", "C"],
    ara: ["a", "a", "a", "a"],
    arc: ["d", "e", "f", "g"],
    atl: ["h", "i", "j", "k"],
    bog: ["h", "i", "j", "k"],
    bol: ["h", "i", "j", "k"],
    boy: ["A", "E", "V", "E"],
    cal: ["M", "A", "E", "C"],
    caq: ["a", "a", "a", "a"],
    cas: ["d", "e", "f", "g"],
    cau: ["h", "i", "j", "k"],
    ces: ["h", "i", "j", "k"],
    cho: ["h", "i", "j", "k"],
    cor: ["A", "E", "V", "E"],
    cun: ["M", "A", "E", "C"],
    guai: ["a", "a", "a", "a"],
    guav: ["d", "e", "f", "g"],
    hui: ["h", "i", "j", "k"],
    gua: ["h", "i", "j", "k"],
    met: ["h", "i", "j", "k"],
    nar: ["A", "E", "V", "E"],
    nor: ["M", "A", "E", "C"],
    put: ["a", "a", "a", "a"],
    qui: ["d", "e", "f", "g"],
    ris: ["h", "i", "j", "k"],
    sana: ["h", "i", "j", "k"],
    sant: ["A", "E", "V", "E"],
    suc: ["M", "A", "E", "C"],
    tol: ["a", "a", "a", "a"],
    val: ["d", "e", "f", "g"],
    vau: ["h", "i", "j", "k"],
    vic: ["h", "i", "j", "k"]
}
$('#departament').change(function (e) {
    let modelList = document.getElementById("cities");
    while (modelList.options.length) {
        modelList.remove(0);
    }
    cities[$(this).val()].map(city => {
        $('#cities').append(`<option value="${city}">${city}</option>`);
    })

})