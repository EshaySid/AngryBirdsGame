class Link {
  constructor(A, B) {
    var options = {
      bodyA: A,
      pointB: B,
      length: 5,
      stiffness: 0.04,
    };

    this.connection = Constraint.create(options);
    World.add(world, this.connection);
  }

  display() {
    if (this.connection.bodyA !== null) {
      var a = this.connection.bodyA.position;
      var b = this.connection.pointB;
      line(a.x, a.y, b.x, b.y);
    }
  }

  break() {
    this.connection.bodyA = null;
  }
}
