import React from 'react';

const StudentBenefits = () => {
  return (
    <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
      <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">👨‍🎓 Perfect for Students</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800 dark:text-blue-300">
        <div>• Find textbooks by ISBN</div>
        <div>• Research by academic subjects</div>
        <div>• Access free online books</div>
        <div>• Save reading lists</div>
        <div>• Filter by publication year</div>
        <div>• Multi-language support</div>
      </div>
    </div>
  );
};

export default StudentBenefits;