function transform(input) {
  return {
    features: (input.features || []).map((feature) => {
      const attributes = feature.attributes || {};

      return {
        attributes: {
          IncidentTypeCode: attributes.IncidentTypeCode,
          IncidentTypeName: attributes.IncidentTypeName,
          CallReceivedTime: attributes.CallReceivedTime,
          Location: attributes.Location,
          CityName: attributes.CityName,
        },
      };
    }),
  };
}
