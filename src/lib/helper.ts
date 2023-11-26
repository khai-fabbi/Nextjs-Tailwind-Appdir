/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
  return null
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key)
  }
  return null
}

export function isEmpty(obj: Array<any> | object): boolean {
  if (!obj || typeof obj !== 'object') return !obj

  if (Array.isArray(obj)) {
    return !obj.length
  }

  return !Object.keys(obj).length
}

export function removeUndefinedAndNull(obj: Object) {
  const result: Record<string, any> = {}

  for (const key in obj) {
    if (
      obj[key as keyof Object] !== undefined &&
      obj[key as keyof Object] !== null
    ) {
      result[key as any] = obj[key as keyof Object]
    }
  }

  return result
}

export function handleApiError(error: Error): void {
  try {
    let errorData
    try {
      errorData = JSON.parse(error.message)
    } catch (parseError) {
      return
    }

    if (
      typeof errorData === 'object' &&
      errorData !== null &&
      'fieldErrors' in errorData
    ) {
      const fieldErrors = errorData.fieldErrors as Record<string, string[]>
      Object.keys(fieldErrors).forEach((fieldName) => {
        const validationMessages = fieldErrors[fieldName]
        if (validationMessages.length > 0) {
          // eslint-disable-next-line unused-imports/no-unused-vars
          const firstValidationMessage = validationMessages[0]
          // console.log(
          //   `Validation error for ${fieldName}:`,
          //   firstValidationMessage
          // );
        }
      })
    }
  } catch (error: any) {
    // console.log("Original error message:", error);
  }
}
