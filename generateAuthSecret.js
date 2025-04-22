// AUTH_SECRETを生成するスクリプトです。
// このスクリプトをターミナルから実行して👇️設定してください。
// ## AUTH_SECRET="*****"

generateAuthSecret.js;
import crypto from "node:crypto";

function generateAuthSecret() {
	console.log("Step 5: Generating AUTH_SECRET...");
	const fx = crypto.randomBytes(32).toString("hex");
	console.log("🚀 ~ generateAuthSecret ~ fx:", fx);
}

generateAuthSecret();
