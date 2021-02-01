import { GraphQLScalarType, Kind } from 'graphql';

type AnyDateFormat = string | Date | number;

const DateTime = new GraphQLScalarType({
  name: `DateTime`,
  description: `A date and time, represented as an ISO-8601 string`,
  serialize: (value: AnyDateFormat) => new Date(value).toISOString(),
  parseValue: (value: AnyDateFormat) => new Date(value).toISOString(),
  parseLiteral: (ast) => {
    if (ast.kind !== Kind.STRING) {
      throw new Error(`Can only validate strings as DateTime but got a: ${ast.kind}`);
    }

    return new Date(ast.value);
  },
});

export default DateTime;
