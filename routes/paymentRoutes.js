import express from "express";
import {
  checkCvSubmittedStatus,
  checkout,
  couponVerification,
  paymentVerification,
  updateCvSubmittedStatus,
} from "../controllers/paymentController.js";
import { createTreasuryWallet, executeRawTransaction, getBulkOrderDetails } from "../controllers/oktoController.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.route("/coupon_verification/:couponCode").post(couponVerification);

router.route("/cvsubmitted_status/:paymentId").get(checkCvSubmittedStatus);

router.route("/update_cv_status").put(updateCvSubmittedStatus);

router.post("/createCW",createTreasuryWallet);

router.post("/exerawtx",executeRawTransaction);

router.get("/get_bulkorder_details/:twUserId/:bulkOrderId",getBulkOrderDetails)

export default router;
