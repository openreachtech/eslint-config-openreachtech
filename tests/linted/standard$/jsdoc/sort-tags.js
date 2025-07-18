'use strict'

/* eslint-disable jsdoc/tag-lines */

// ❌ `jsdoc/sort-tags`
/**
 * @returns {number} - Doubled value.
 * @param {number} value - Base value.
 */
function alphaFunc (value) {
  return value * 2
}

// ✅ reportIntraTagGroupSpacing:false of `jsdoc/sort-tags`
/**
 * Reciprocal value.
 *
 * @param {number} value - Divisor value.
 * @returns {number} - Reciprocal value.
 *
 * @throws {Error} - Cannot divide by zero.
 */
function betaFunc (value) {
  if (value === 0) {
    throw new Error('Cannot divide by zero')
  }

  return 1 / value
}

export default {
  alphaFunc,
  betaFunc,
}

/*
Tags are not in the prescribed order:
  summary,
  typeSummary,
  module,
  exports,
  file,
  fileoverview,
  overview,
  typedef,
  interface,
  record,
  template,
  name,
  kind,
  type,
  alias,
  external,
  host,
  callback,
  func,
  function,
  method,
  class,
  constructor,
  modifies,
  mixes,
  mixin,
  mixinClass,
  mixinFunction,
  namespace,
  borrows,
  constructs,
  lends,
  implements,
  requires,
  desc,
  description,
  classdesc,
  tutorial,
  copyright,
  license,
  internal,
  overload,
  const,
  constant,
  final,
  global,
  readonly,
  abstract,
  virtual,
  var,
  member,
  memberof,
  memberof!,
  inner,
  instance,
  inheritdoc,
  inheritDoc,
  override,
  hideconstructor,
  param,
  arg,
  argument,
  prop,
  property,
  return,
  returns,
  async,
  generator,
  default,
  defaultvalue,
  enum,
  augments,
  extends,
  throws,
  exception,
  yield,
  yields,
  event,
  fires,
  emits,
  listens,
  this,
  satisfies,
  static,
  private,
  protected,
  public,
  access,
  package,
  -other,
  see,
  example,
  closurePrimitive,
  customElement,
  expose,
  hidden,
  idGenerator,
  meaning,
  ngInject,
  owner,
  wizaction,
  define,
  dict,
  export,
  externs,
  implicitCast,
  noalias,
  nocollapse,
  nocompile,
  noinline,
  nosideeffects,
  polymer,
  polymerBehavior,
  preserve,
  struct,
  suppress,
  unrestricted,
  category,
  ignore,
  author,
  version,
  variation,
  since,
  deprecated,
  todo,
*/
