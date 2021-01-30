"use strict";

const child_process = require("child_process");

function sips(input, output, format) {
	child_process.execSync(`sips -s format ${format} ${input} --out ${output}`);
}

module.exports = sips;
