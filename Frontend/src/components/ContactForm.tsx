import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="text-sm text-black mb-2 block">Name</label>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full bg-gray-100 py-3 px-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full bg-gray-100 py-3 px-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
                            required
                        />
                    </div>
                </div>
            </div>
            <div>
                <label className="text-sm text-black mb-2 block">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-100 py-3 px-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
                    required
                />
            </div>
            <div>
                <label className="text-sm text-black mb-2 block">Write a message...</label>
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-100 py-3 px-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg resize-y min-h-[96px]"
                />
            </div>
            <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
                Send
            </button>
        </form>
    );
}
