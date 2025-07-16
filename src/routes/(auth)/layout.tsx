import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)")({
	component: AuthLayout,
});

export default function AuthLayout() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<Outlet />
		</div>
	);
}
