function InitializeTable()
{
    var i: number

    var container = document.getElementById("container");

    for (i = 0; i < 5; i++)
    {
        var inputElement = document.createElement("input");
        container.appendChild(inputElement);
        container.appendChild(document.createElement("br"));
    }

    console.log('Table Created');
    return 0
}

function CloneTable()
{

    var node = document.getElementById("container");
    var clone = node.cloneNode(true);
    document.body.appendChild(clone)

    console.log('Table Cloned');
    return 0
}
