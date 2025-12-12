import { toast as sonnerToast } from "sonner";

/**
 * Toast notification helper functions
 * Provides consistent toast notifications throughout the application
 */

interface ToastOptions {
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Display a success toast notification
 */
export function toastSuccess(message: string, options?: ToastOptions) {
  return sonnerToast.success(message, {
    description: options?.description,
    duration: options?.duration || 4000,
    action: options?.action,
  });
}

/**
 * Display an error toast notification
 */
export function toastError(message: string, options?: ToastOptions) {
  return sonnerToast.error(message, {
    description: options?.description,
    duration: options?.duration || 5000,
    action: options?.action,
  });
}

/**
 * Display an info toast notification
 */
export function toastInfo(message: string, options?: ToastOptions) {
  return sonnerToast.info(message, {
    description: options?.description,
    duration: options?.duration || 4000,
    action: options?.action,
  });
}

/**
 * Display a warning toast notification
 */
export function toastWarning(message: string, options?: ToastOptions) {
  return sonnerToast.warning(message, {
    description: options?.description,
    duration: options?.duration || 4000,
    action: options?.action,
  });
}

/**
 * Display a loading toast notification
 * Returns a toast ID that can be used to dismiss or update the toast
 */
export function toastLoading(
  message: string,
  options?: Omit<ToastOptions, "action">,
) {
  return sonnerToast.loading(message, {
    description: options?.description,
    duration: options?.duration || Infinity,
  });
}
