function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let spaceAvailabe = width * length * height;
    let boxes = input[index];
    index++
    let boxesCount = 0;

    while (boxes !== "Done") {
        boxes = Number(boxes);
        boxesCount += boxes;

        if (boxesCount > spaceAvailabe) {
            console.log(`No more free space! You need ${boxesCount - spaceAvailabe} Cubic meters more.`);
            return;
        }

        boxes = input[index];
        index++;
    }
    console.log(`${spaceAvailabe - boxesCount} Cubic meters left.`);

}

moving([
    "10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"
]);

