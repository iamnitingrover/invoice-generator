const isFeatureEnabled = false; // Toggle this flag as needed

export default function DashboardPage() {
    if (!isFeatureEnabled) {
        return <div>Invoice Generator is still under development</div>;
    }

    // Your actual dashboard content would go here once the feature is ready
    return <div>Welcome to the Dashboard!</div>;
}
