
function guid() {
    // 生成uuid
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(6);
    });
};
// 全局拖动函数
function onDrag(id, event) {
    const _this = {};
    _this.selectElement = document.getElementById(id);
    var div1 = _this.selectElement;
    _this.selectElement.style.cursor = "move";
    var distanceX = event.clientX - _this.selectElement.offsetLeft;
    var distanceY = event.clientY - _this.selectElement.offsetTop;
    document.onmousemove = function (ev) {
        var oevent = ev || event;
        div1.style.left = oevent.clientX - distanceX + "px";
        div1.style.top = oevent.clientY - distanceY + "px";
    };
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        div1.style.cursor = "default";
    };
};

export {
    guid,
    onDrag,
}