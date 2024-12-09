exports.getMessageFromHome = (name) => {
  if (!name) {
    return 'Ambiente configurado com sucesso!';
  }
  return `Olá, ${name}! O ambiente está configurado.`;
};
