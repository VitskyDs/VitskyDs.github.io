/*Setting vars and initial values for rows and cols*/

var grid = $('.grid-container'),
    rows = 10,
    cols = 10,
    color;

/*function that converts Hex to RGB*/

function hexToRgb(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgb(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ') + ')';
    }
    throw new Error('Bad Hex');
}

/* funciton that appends divs into grid*/

var appendDiv = function (r, c) {

    for (var i = 0; i < (r * c); i++) {
        grid.append('<div class="cell"></div>');
    }
};

/*Sets initial state of grid and resets on calling*/
var resetGrid = function () {
    $('select').val('10');
    grid.empty();
    grid.css('grid-template-rows', 'repeat(10, 1fr)');
    grid.css('grid-template-columns', 'repeat(10, 1fr)');
    appendDiv(10, 10);
};

resetGrid();

$('#reset-grid').on('click', function () {
    resetGrid();
})

/* function that creates grid*/
function createGrid(r, c) {
    grid.css('grid-template-rows', 'repeat(' + r + ', 1fr)');
    grid.css('grid-template-columns', 'repeat(' + c + ', 1fr)');
    grid.empty();
    appendDiv(r, c);
}

/*Sets number of rows*/
/*$('#set-rows').on('change', function () {
    rows = $('#set-rows').val();
    grid.css('grid-template-rows', 'repeat(' + rows + ', 1fr)');
    Number(rows);
    Number(cols);
    grid.empty();
    for (var i = 0; i < (rows * cols); i++) {
        appendDiv();
    }
});*/

/*Sets number of cols and row on change at inputs*/
$('.input-row-cell').on('change', function () {
    rows = $('#set-rows').val() === null ? 10 : Number($('#set-rows').val());
    cols = $('#set-cols').val() === null ? 10 : Number($('#set-cols').val());
    createGrid(rows, cols);
});

/*Get color from color picker and convert to RGB*/
color = hexToRgb($('#color').val());

$('#colorpicker').on('click', function () {
    color = hexToRgb($('#color').val());
});

/*Colors div on click*/
grid.on('click', '.cell', function () {
    if ($(this).css('background-color') === color) {
        $(this).css('background-color', "#ffffff")
    } else {
        $(this).css('background-color', color);
    }
});
