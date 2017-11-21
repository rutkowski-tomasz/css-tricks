<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Flexbox</title>
    <meta name="description" content="Flexbox usage">
    <meta name="author" content="Tomasz Rutkowski">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>

    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main>
        <h1>flex-direction: row</h1>
        <p class="desc">Ignoring item width property (default)</p>
        <div class="container" style="flex-direction: row;">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
        </div>
        
        <h1>flex-direction: row-reverse</h1>
        <p class="desc">Ignoring item width property</p>
        <div class="container" style="flex-direction: row-reverse;">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
        </div>
        
        <h1>flex-direction: column</h1>
        <div class="container" style="flex-direction: column;">
            <div class="item">1</div>
            <div class="item">2</div>
        </div>

        <h1>flex-direction: column-reverse</h1>
        <div class="container" style="flex-direction: column-reverse;">
            <div class="item">1</div>
            <div class="item">2</div>
        </div>

        <h1>order</h1>
        <p class="desc">Lower order comes first</p>
        <div class="container">
            <div class="item" style="order: 5">5</div>
            <div class="item" style="order: 2">2</div>
            <div class="item" style="order: 4">4</div>
            <div class="item" style="order: 3">3</div>
            <div class="item" style="order: 1">1</div>
        </div>

        <h1>flex-grow</h1>
        <p class="desc">Width property should be set to auto</p>
        <div class="container">
            <div class="item" style="flex-grow: 2; width: auto;">2</div>
            <div class="item" style="flex-grow: 3; width: auto;">3</div>
            <div class="item" style="flex-grow: 1; width: auto;">1</div>
            <div class="item" style="flex-grow: 1; width: auto;">1</div>
            <div class="item" style="flex-grow: 2; width: auto;">2</div>
        </div>

        <h1>flex-wrap: nowrap</h1>
        <p class="desc">Force to fit all items into one line. (default)</p>
        <div class="container" style="flex-wrap: nowrap">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
        </div>
        
        <h1>flex-wrap: wrap</h1>
        <p class="desc">Apped new line of items after reaching container width.</p>
        <div class="container" style="flex-wrap: wrap">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
        </div>
        
        <h1>flex-wrap: wrap-reverse</h1>
        <p class="desc">Prepend new line of items after reaching container width.</p>
        <div class="container" style="flex-wrap: wrap-reverse">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
        </div>
        
        <h1>flex-shrink</h1>
        <p class="desc">Opposite of flex-grow. Negative number is not allowed.</p>
        <div class="container">
            <div class="item">1</div>
            <div class="item" style="flex-shrink: 3">3</div>
            <div class="item">1</div>
            <div class="item"style="flex-shrink: 2">2</div>
            <div class="item">1</div>
            <div class="item">1</div>
        </div>
        
        <h1>flex-flow: row-reverse nowrap</h1>
        <p class="desc">Alias for flex-direction and flex-wrap.</p>
        <div class="container" style="flex-flow: row-reverse nowrap">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
        </div>

        <h1>flex-basis</h1>
        <p class="desc">Setting size of item until its possible. (default = auto)</p>
        <div class="container">
            <div class="item" style="flex-basis: 150px">150px</div>
            <div class="item">2</div>
            <div class="item" style="flex-basis: 33%">50%</div>
            <div class="item">4</div>
            <div class="item">5</div>
        </div>


        <h1>justify-content: flex-start</h1>
        <div class="container" style="justify-content: flex-start">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>

        <h1>justify-content: flex-end</h1>
        <div class="container" style="justify-content: flex-end">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
        
        <h1>justify-content: center</h1>
        <div class="container" style="justify-content: center">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
        
        <h1>justify-content: space-between</h1>
        <div class="container" style="justify-content: space-between">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
        
        <h1>justify-content: space-around</h1>
        <div class="container" style="justify-content: space-around">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
        
        <h1>justify-content: space-evenly</h1>
        <div class="container" style="justify-content: space-evenly">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
        
        <h1>align-self</h1>
        <div class="container" style="height: 300px;">
            <div class="item" style="align-self: flex-end">flex-end</div>
            <div class="item" style="align-self: center">center</div>
            <div class="item" style="align-self: stretch">stretch</div>
            <div class="item">default</div>
        </div>

        <h1>align-content: center</h1>
        <div class="container" style="height: 300px; align-content: center; flex-wrap: wrap;">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
        </div>
        
        <h1>align-content: flex-end</h1>
        <div class="container" style="height: 300px; align-content: flex-end; flex-wrap: wrap;">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
        </div>

        <h1>align-items: center</h1>
        <div class="container" style="height: 300px; align-items: center; flex-wrap: wrap;">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
        </div>

        <h1>Centering item</h1>
        <div class="container" style="height: 300px; align-items: center; justify-content: center;">
            <div class="item">1</div>
        </div>
    </main>
</body>
</html>
