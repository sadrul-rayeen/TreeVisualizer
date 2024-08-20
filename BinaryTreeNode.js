export class BinaryTreeNode {
  left = null;
  right = null;
  value = null;

  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  setLeft(node) {
    this.left = node;
  }

  setRight(node) {
    this.right = node;
  }

  getHeight() {
    const leftH = this.left?.getHeight() || 0;
    const rightH = this.right?.getHeight() || 0;

    return Math.max(leftH, rightH) + 1;
  }
}
