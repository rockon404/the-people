function mapAxiosError(err: any) {
  if (err.response && typeof err.response === 'object') {
    const { data, status } = err.response;
    const error = data.error || data;
    return {
      error,
      status,
    };
  }

  return null;
}

export default mapAxiosError;
