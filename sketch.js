let qTree
function setup() {
    createCanvas(400, 400)

    let boundary = new Rectangle(200, 200, 200, 200)
    qTree = new QuardTree(boundary, 4)
    console.log(qTree)

    // 随机插入点
    background(0)

    for (let i = 0; i < 50; i++) {
        let p = new Point(random(width), random(width))
        qTree.insert(p)
    }
    qTree.show()




}
// function draw () {
//     if (mouseIsPressed) {
//         for (let i = 0; i < 5; i++) {
//             let m = new Point(mouseX + random(-5, 5), mouseY + random(-5, 5))
//             qTree.insert(m)
//         }
       

//     }
//     background(0)
//     qTree.show()
// }