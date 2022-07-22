var x = [0, 6794, 7965, 7608, 7363, 7977, 4757, 7859, 4790, 4055, 4518, 5701, 7729, 5730, 6899, 7814, 7535, 4577, 4751, 7089, 6497, 5842, 7303, 4469, 5156, 4920, 6191, 6831, 5778, 5671, 6190, 7295, 6482, 4845, 7003, 7175, 4105, 5217, 4129, 7231, 5762, 5944, 5205, 4318, 6680, 5960, 7146, 4925, 5981, 7281, 5489, 4857, 8071, 7579, 4408, 4187, 4251, 5791, 8092, 7624, 4835, 5465, 7742, 4528, 7951, 6153, 8093, 5664, 6750, 6244, 4699, 4054, 4361, 4498, 6983, 5582, 6217, 4789, 8015, 4147, 7877, 4214, 7819, 5462, 6493, 6277, 5490, 8009, 6788, 6640, 6824, 8089, 7430, 6903, 5362, 5858, 4070, 5253, 7068, 7360, 5868, 7212, 6351, 6052, 7255, 7405, 4066, 6314, 7852, 7224, 4364, 5887, 7978, 5894, 7121, 5771, 6439, 4738, 5913, 5160, 7137, 4690, 8001, 5444, 5799, 5995, 6998, 7290, 4783, 7627, 4872, 5559, 5611, 8074, 6667, 6161, 6907, 5459, 7714, 4284, 4549, 4542, 5677, 4656, 6975, 5337, 5748, 5053, 4834, 7601, 6812, 7519, 7959, 4425, 4351, 5680, 5311, 5358, 7236, 8038, 7553, 5360, 7589, 5330, 6624, 6911, 6957, 7152, 7781, 5101, 4726, 4396, 8022, 7260, 7081, 7408, 6510, 4411, 6966, 5407, 6652, 5236, 4064, 7480, 7671, 4298, 4192, 6105, 6117, 6184, 7848, 5594, 6133, 7455, 6985, 4878, 6375, 6822, 8024, 6549, 6555, 7329, 5419, 7375, 4813, 5527, 5731, 5882, 7639, 6140, 5074, 6959, 7897, 7065, 4530, 7320, 5479, 7769, 4608, 4715, 5485, 6997, 8023, 4629, 7874, 4954, 4558, 6349, 4122, 6321, 4373, 5153, 7050, 7580, 7512, 6382, 7744, 7946, 7170, 6626, 7979, 8063, 4938, 4754, 5238, 7620, 4700, 4825, 6339, 6503, 6526, 6609, 7442, 4622, 5022, 5649, 4297, 6792, 6110, 7075, 5492, 7153, 5310, 6706, 7436, 7878, 4431, 6002, 4823, 4944, 7267, 5060, 6880, 7944, 4403, 4256, 7294, 4570, 5092, 7847, 5120, 6283, 5303, 5201, 6864, 7100, 6115, 5480, 5993, 5924, 7356, 4768, 4958, 4086, 4080, 8012, 4702, 4903, 6972, 7112, 6451, 4263, 4275, 7836, 5498, 7880, 4121, 6581, 5356, 5915, 7623, 6270, 6036, 5220, 5588, 4157, 4810, 6026, 7868, 7982, 5308, 5661, 5752, 4185, 6116, 8079, 5427, 4309, 6485, 6615, 5761, 4817, 7242, 7221, 4059, 4733, 6832, 5557, 7806, 4445, 7148, 7313, 5261, 5464, 5622, 7686, 8014, 4983, 5191, 7805, 7774, 6353, 7661, 4423, 5601, 6647, 4348, 8053, 4494, 7413, 5173, 6524, 6085, 5692, 7318, 7355, 5272, 4728, 6308, 6135, 4561, 5248, 7439, 6372, 4669, 6946, 4566, 5122, 4171, 7636, 6448, 4432, 7881, 6885, 7933, 5468, 5940, 7016, 6580, 6858, 6059, 4963, 7972, 5159, 7857, 5996, 6525, 7533, 4818, 6929, 6024];
for (let i = 1; i <= 400; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 6 || i == 7 || i == 1 || i == 18 || i == 25) {
        xx = xx % 10;
        xx += 82;
    } else {
        xx = xx % 15;
        xx += 83;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}