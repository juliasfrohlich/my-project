export default function SchemaFactory (EntityFactory: Function, Types: any = null) {
  if (Types) {
    const SchemaTypes = new Types()
    return EntityFactory(SchemaTypes)
  }
}
