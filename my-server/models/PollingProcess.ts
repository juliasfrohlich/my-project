import mongoose from "mongoose";
import SchemaFactory from "./SchemaFactory";
import PollingProcessEntityFactory from "../entities/PollingProcess";

const Schema = mongoose.Schema;
const PollingProcess = SchemaFactory(PollingProcessEntityFactory, Schema)

export default mongoose.model('PollingProcess', PollingProcess)
