class Point {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle {
    constructor (x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    contains (point) {
        return (point.x >= this.x - this.w && 
        point.x <= this.x + this.w &&
        point.y >= this.y - this.h &&
        point.y <= this.y + this.h)
    }
}

class QuardTree {
    constructor (boundary, n) {
        this.boundary = boundary
        this.capacity = n
        this.points = []
        this.divided = false
    }

    subdivide () {
        let x = this.boundary.x
        let y = this.boundary.y
        let w = this.boundary.w
        let h = this.boundary.h

        let ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2)
        this.northest = new QuardTree(ne, this.capacity)
        let nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2)
        this.northwest = new QuardTree(ne, this.capacity)
        let se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2)
        this.southest = new QuardTree(se, this.capacity)
        let sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2)
        this.southwest = new QuardTree(sw, 4 )
    }

    insert (point) {
        if (!this.boundary.contains(point)) {
            return 
        }

        if (this.points.length < this.capacity) {
            this.points.push(point)
            return true
        } else {
            if (!this.divided) {
                this.subdivide()
                this.divided = true
            }
            if (this.northest.insert(point)) {
                return true
            }
            
            if (this.northwest.insert(point)) {
                return true
            }

            if (this.southest.insert(point)) {
                return true
            }

            if (this.southwest.insert(point)) {
                return true
            }
        }
    }

    show () {
        stroke(255)
        strokeWeight(1)
        noFill()
        
        rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2)
        rectMode(CENTER)
        if (this.divided) {
            this.northest.show()
            this.northwest.show()
            this.southest.show()
            this.southwest.show()
        }
        for (let p of this.points) {
            strokeWeight(4)
            point(p.x, p.y)
        }
    }
}